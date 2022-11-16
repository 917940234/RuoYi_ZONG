package com.ruoyi.product.controller;

import java.util.List;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.ruoyi.common.annotation.Log;
import com.ruoyi.common.enums.BusinessType;
import com.ruoyi.product.domain.ProductBlastFurnaceSpeed;
import com.ruoyi.product.service.IProductBlastFurnaceSpeedService;
import com.ruoyi.common.core.controller.BaseController;
import com.ruoyi.common.core.domain.AjaxResult;
import com.ruoyi.common.utils.poi.ExcelUtil;
import com.ruoyi.common.core.page.TableDataInfo;

/**
 * 出铁流速流量预报Controller
 * 
 * @author zongyoucheng
 * @date 2022-11-26
 */
@Controller
@RequestMapping("/product/blastfurnacespeed")
public class ProductBlastFurnaceSpeedController extends BaseController
{
    private String prefix = "product/blastfurnacespeed";

    @Autowired
    private IProductBlastFurnaceSpeedService productBlastFurnaceSpeedService;

    @RequiresPermissions("product:blastfurnacespeed:view")
    @GetMapping()
    public String blastfurnacespeed()
    {
        return prefix + "/blastfurnacespeed";
    }

    /**
     * 查询出铁流速流量预报列表
     */
    @RequiresPermissions("product:blastfurnacespeed:list")
    @PostMapping("/list")
    @ResponseBody
    public TableDataInfo list(ProductBlastFurnaceSpeed productBlastFurnaceSpeed)
    {
        startPage();
        List<ProductBlastFurnaceSpeed> list = productBlastFurnaceSpeedService.selectProductBlastFurnaceSpeedList(productBlastFurnaceSpeed);
        return getDataTable(list);
    }

    /**
     * 导出出铁流速流量预报列表
     */
    @RequiresPermissions("product:blastfurnacespeed:export")
    @Log(title = "出铁流速流量预报", businessType = BusinessType.EXPORT)
    @PostMapping("/export")
    @ResponseBody
    public AjaxResult export(ProductBlastFurnaceSpeed productBlastFurnaceSpeed)
    {
        List<ProductBlastFurnaceSpeed> list = productBlastFurnaceSpeedService.selectProductBlastFurnaceSpeedList(productBlastFurnaceSpeed);
        ExcelUtil<ProductBlastFurnaceSpeed> util = new ExcelUtil<ProductBlastFurnaceSpeed>(ProductBlastFurnaceSpeed.class);
        return util.exportExcel(list, "出铁流速流量预报数据");
    }

    /**
     * 新增出铁流速流量预报
     */
    @GetMapping("/add")
    public String add()
    {
        return prefix + "/add";
    }

    /**
     * 新增保存出铁流速流量预报
     */
    @RequiresPermissions("product:blastfurnacespeed:add")
    @Log(title = "出铁流速流量预报", businessType = BusinessType.INSERT)
    @PostMapping("/add")
    @ResponseBody
    public AjaxResult addSave(ProductBlastFurnaceSpeed productBlastFurnaceSpeed)
    {
        return toAjax(productBlastFurnaceSpeedService.insertProductBlastFurnaceSpeed(productBlastFurnaceSpeed));
    }

    /**
     * 修改出铁流速流量预报
     */
    @RequiresPermissions("product:blastfurnacespeed:edit")
    @GetMapping("/edit/{blastFurnaceSpeedId}")
    public String edit(@PathVariable("blastFurnaceSpeedId") Long blastFurnaceSpeedId, ModelMap mmap)
    {
        ProductBlastFurnaceSpeed productBlastFurnaceSpeed = productBlastFurnaceSpeedService.selectProductBlastFurnaceSpeedByBlastFurnaceSpeedId(blastFurnaceSpeedId);
        mmap.put("productBlastFurnaceSpeed", productBlastFurnaceSpeed);
        return prefix + "/edit";
    }

    /**
     * 修改保存出铁流速流量预报
     */
    @RequiresPermissions("product:blastfurnacespeed:edit")
    @Log(title = "出铁流速流量预报", businessType = BusinessType.UPDATE)
    @PostMapping("/edit")
    @ResponseBody
    public AjaxResult editSave(ProductBlastFurnaceSpeed productBlastFurnaceSpeed)
    {
        return toAjax(productBlastFurnaceSpeedService.updateProductBlastFurnaceSpeed(productBlastFurnaceSpeed));
    }

    /**
     * 删除出铁流速流量预报
     */
    @RequiresPermissions("product:blastfurnacespeed:remove")
    @Log(title = "出铁流速流量预报", businessType = BusinessType.DELETE)
    @PostMapping( "/remove")
    @ResponseBody
    public AjaxResult remove(String ids)
    {
        return toAjax(productBlastFurnaceSpeedService.deleteProductBlastFurnaceSpeedByBlastFurnaceSpeedIds(ids));
    }
}
