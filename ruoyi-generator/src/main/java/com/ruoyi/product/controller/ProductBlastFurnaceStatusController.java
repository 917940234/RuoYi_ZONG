package com.ruoyi.product.controller;

import java.io.IOException;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ruoyi.product.domain.ProductBlastFurnaceLevel;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.product.domain.ProductBlastFurnaceStatus;
import com.ruoyi.product.service.IProductBlastFurnaceStatusService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 铁水包状态Controller
 * 
 * @author zongyoucheng
 * @date 2022-10-10
 */
@Controller
@RequestMapping("/product/blastfurnacestatus")
public class ProductBlastFurnaceStatusController extends BaseController
{
    private String prefix = "product/blastfurnacestatus";

    @Autowired
    private IProductBlastFurnaceStatusService productBlastFurnaceStatusService;

    @RequiresPermissions("product:blastfurnacestatus:view")
    @GetMapping()
    public String blastfurnacestatus()
    {
        return prefix + "/blastfurnacestatus";
    }

    /**
     * product:blastfurnacestatus:echarts返回到echarts页面(权限决定是否读取到该方法，return决定跳转到何页面，getmapping不能重复，会报错)
     * @return
     */
    @RequiresPermissions("product:blastfurnacestatus:echarts")
    @GetMapping("/echarts")
    public String realtimeecharts()
    {
        return prefix + "/echarts.html";
    }

    /**
     * 查询铁水包状态列表
     */
    @RequiresPermissions("product:blastfurnacestatus:list")
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(ProductBlastFurnaceStatus productBlastFurnaceStatus)
    {
        startPage();
        List<ProductBlastFurnaceStatus> list = productBlastFurnaceStatusService.selectProductBlastFurnaceStatusList(productBlastFurnaceStatus);
        return getDataTable(list);
    }

    /**
     * 导出铁水包状态列表
     */
    @RequiresPermissions("product:blastfurnacestatus:export")
    @Log(title = "铁水包状态", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(ProductBlastFurnaceStatus productBlastFurnaceStatus)
    {
        List<ProductBlastFurnaceStatus> list = productBlastFurnaceStatusService.selectProductBlastFurnaceStatusList(productBlastFurnaceStatus);
        ExcelUtil<ProductBlastFurnaceStatus> util = new ExcelUtil<ProductBlastFurnaceStatus>(ProductBlastFurnaceStatus.class);
        return util.exportExcel(list, "铁水包状态数据");
    }

    /**
     * 新增铁水包状态
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存铁水包状态
     */
    @RequiresPermissions("product:blastfurnacestatus:add")
    @Log(title = "铁水包状态", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(ProductBlastFurnaceStatus productBlastFurnaceStatus)
    {
        return toAjax(productBlastFurnaceStatusService.insertProductBlastFurnaceStatus(productBlastFurnaceStatus));
    }

    /**
     * 修改铁水包状态
     */
    @RequiresPermissions("product:blastfurnacestatus:edit")
    @GetMapping("/edit/{blastFurnaceStatusId}")
    public String edit(@PathVariable("blastFurnaceStatusId") Long blastFurnaceStatusId, ModelMap mmap)
    {
        ProductBlastFurnaceStatus productBlastFurnaceStatus = productBlastFurnaceStatusService.selectProductBlastFurnaceStatusByBlastFurnaceStatusId(blastFurnaceStatusId);
        mmap.put("productBlastFurnaceStatus", productBlastFurnaceStatus);
        return prefix + "/edit";
    }

    /**
     * 修改保存铁水包状态
     */
    @RequiresPermissions("product:blastfurnacestatus:edit")
    @Log(title = "铁水包状态", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(ProductBlastFurnaceStatus productBlastFurnaceStatus)
    {
        return toAjax(productBlastFurnaceStatusService.updateProductBlastFurnaceStatus(productBlastFurnaceStatus));
    }

    /**
     * 删除铁水包状态
     */
    @RequiresPermissions("product:blastfurnacestatus:remove")
    @Log(title = "铁水包状态", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(productBlastFurnaceStatusService.deleteProductBlastFurnaceStatusByBlastFurnaceStatusIds(ids));
    }

    /**
     * 铁水包状态数据json
     */
    @PostMapping("/echarts")
    public void selectStatusEcharts(ProductBlastFurnaceStatus productBlastFurnaceStatus, Model model, HttpServletRequest request, HttpServletResponse response) throws IOException {
        //查询数据
        List<ProductBlastFurnaceStatus> list =  productBlastFurnaceStatusService.selectProductBlastFurnaceStatusList(productBlastFurnaceStatus);
        //提供java-json相互转换功能的类
        ObjectMapper mapper = new ObjectMapper();
        //将list中的对象转换为Json格式的数组
        String json = mapper.writeValueAsString(list);
        //System.out.println(json);
        //将json数据返回给客户端
        response.setContentType("text/html; charset=utf-8");
        response.getWriter().write(json);
    }
}
