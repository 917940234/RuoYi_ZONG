package com.ruoyi.product.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ruoyi.product.mapper.ProductTemplateMapper;
import com.ruoyi.product.domain.ProductTemplate;
import com.ruoyi.product.service.IProductTemplateService;
import com.ruoyi.common.core.text.Convert;

/**
 * 生产数据监测Service业务层处理
 * 
 * @author zongyoucheng
 * @date 2022-09-22
 */
@Service
public class ProductTemplateServiceImpl implements IProductTemplateService 
{
    @Autowired
    private ProductTemplateMapper productTemplateMapper;

    /**
     * 查询生产数据监测
     * 
     * @param productId 生产数据监测主键
     * @return 生产数据监测
     */
    @Override
    public ProductTemplate selectProductTemplateByProductId(Long productId)
    {
        return productTemplateMapper.selectProductTemplateByProductId(productId);
    }

    /**
     * 查询生产数据监测列表
     * 
     * @param productTemplate 生产数据监测
     * @return 生产数据监测
     */
    @Override
    public List<ProductTemplate> selectProductTemplateList(ProductTemplate productTemplate)
    {
        return productTemplateMapper.selectProductTemplateList(productTemplate);
    }

    /**
     * 新增生产数据监测
     * 
     * @param productTemplate 生产数据监测
     * @return 结果
     */
    @Override
    public int insertProductTemplate(ProductTemplate productTemplate)
    {
        return productTemplateMapper.insertProductTemplate(productTemplate);
    }

    /**
     * 修改生产数据监测
     * 
     * @param productTemplate 生产数据监测
     * @return 结果
     */
    @Override
    public int updateProductTemplate(ProductTemplate productTemplate)
    {
        return productTemplateMapper.updateProductTemplate(productTemplate);
    }

    /**
     * 批量删除生产数据监测
     * 
     * @param productIds 需要删除的生产数据监测主键
     * @return 结果
     */
    @Override
    public int deleteProductTemplateByProductIds(String productIds)
    {
        return productTemplateMapper.deleteProductTemplateByProductIds(Convert.toStrArray(productIds));
    }

    /**
     * 删除生产数据监测信息
     * 
     * @param productId 生产数据监测主键
     * @return 结果
     */
    @Override
    public int deleteProductTemplateByProductId(Long productId)
    {
        return productTemplateMapper.deleteProductTemplateByProductId(productId);
    }
}
