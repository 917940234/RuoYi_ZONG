package com.ruoyi.product.controller;

import java.io.IOException;
import java.util.List;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ruoyi.product.domain.ProductBlastFurnaceStatus;
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
import com.ruoyi.product.domain.ProductBlastFurnaceWeight;
import com.ruoyi.product.service.IProductBlastFurnaceWeightService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 出铁重量计量Controller
 * 
 * @author zongyoucheng
 * @date 2022-11-26
 */
@Controller
@RequestMapping("/product/blastfurnaceweight")
public class ProductBlastFurnaceWeightController extends BaseController
{
    private String prefix = "product/blastfurnaceweight";

    @Autowired
    private IProductBlastFurnaceWeightService productBlastFurnaceWeightService;

    @RequiresPermissions("product:blastfurnaceweight:view")
    @GetMapping()
    public String blastfurnaceweight()
    {
        return prefix + "/blastfurnaceweight";
    }

    /**
     * product:blastfurnaceweight:echarts返回到echarts页面(权限决定是否读取到该方法，return决定跳转到何页面，getmapping不能重复，会报错)
     * @return
     */
    @RequiresPermissions("product:blastfurnaceweight:echarts")
    @GetMapping("/echarts")
    public String echarts()
    {
        return prefix + "/echarts.html";
    }

    /**
     * 查询出铁重量计量列表
     */
    @RequiresPermissions("product:blastfurnaceweight:list")
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(ProductBlastFurnaceWeight productBlastFurnaceWeight)
    {
        startPage();
        List<ProductBlastFurnaceWeight> list = productBlastFurnaceWeightService.selectProductBlastFurnaceWeightList(productBlastFurnaceWeight);
        return getDataTable(list);
    }

    /**
     * 导出出铁重量计量列表
     */
    @RequiresPermissions("product:blastfurnaceweight:export")
    @Log(title = "出铁重量计量", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(ProductBlastFurnaceWeight productBlastFurnaceWeight)
    {
        List<ProductBlastFurnaceWeight> list = productBlastFurnaceWeightService.selectProductBlastFurnaceWeightList(productBlastFurnaceWeight);
        ExcelUtil<ProductBlastFurnaceWeight> util = new ExcelUtil<ProductBlastFurnaceWeight>(ProductBlastFurnaceWeight.class);
        return util.exportExcel(list, "出铁重量计量数据");
    }

    /**
     * 新增出铁重量计量
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存出铁重量计量
     */
    @RequiresPermissions("product:blastfurnaceweight:add")
    @Log(title = "出铁重量计量", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(ProductBlastFurnaceWeight productBlastFurnaceWeight)
    {
        return toAjax(productBlastFurnaceWeightService.insertProductBlastFurnaceWeight(productBlastFurnaceWeight));
    }

    /**
     * 修改出铁重量计量
     */
    @RequiresPermissions("product:blastfurnaceweight:edit")
    @GetMapping("/edit/{blastFurnaceWeightId}")
    public String edit(@PathVariable("blastFurnaceWeightId") Long blastFurnaceWeightId, ModelMap mmap)
    {
        ProductBlastFurnaceWeight productBlastFurnaceWeight = productBlastFurnaceWeightService.selectProductBlastFurnaceWeightByBlastFurnaceWeightId(blastFurnaceWeightId);
        mmap.put("productBlastFurnaceWeight", productBlastFurnaceWeight);
        return prefix + "/edit";
    }

    /**
     * 修改保存出铁重量计量
     */
    @RequiresPermissions("product:blastfurnaceweight:edit")
    @Log(title = "出铁重量计量", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(ProductBlastFurnaceWeight productBlastFurnaceWeight)
    {
        return toAjax(productBlastFurnaceWeightService.updateProductBlastFurnaceWeight(productBlastFurnaceWeight));
    }

    /**
     * 删除出铁重量计量
     */
    @RequiresPermissions("product:blastfurnaceweight:remove")
    @Log(title = "出铁重量计量", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(productBlastFurnaceWeightService.deleteProductBlastFurnaceWeightByBlastFurnaceWeightIds(ids));
    }
    /**
     * 铁水包状态数据json
     */
    @PostMapping("/echarts")
    public void selectWeightEcharts(Long blastFurnaceWeightId, Model model, HttpServletRequest request, HttpServletResponse response) throws IOException {
        //查询数据
        ProductBlastFurnaceWeight list =  productBlastFurnaceWeightService.selectProductBlastFurnaceWeightByBlastFurnaceWeightId(1L);
        //提供java-json相互转换功能的类
        ObjectMapper mapper = new ObjectMapper();
        //将list中的对象转换为Json格式的数组
        String json = mapper.writeValueAsString(list);
        System.out.println(json);
        //将json数据返回给客户端
        response.setContentType("text/html; charset=utf-8");
        response.getWriter().write(json);
    }
}
